import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Plus, Trash2, Save, ArrowLeft } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function AdminSection() {
  const { navigateTo, lang, t } = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [brokersAr, setBrokersAr] = useState([]);
  const [brokersEn, setBrokersEn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const verifyPin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin }),
      });
      if (res.ok) {
        setIsAuthenticated(true);
        loadBrokers();
      } else {
        setError('PIN غير صحيح / Invalid PIN');
      }
    } catch {
      setError('خطأ في الاتصال / Connection error');
    }
  };

  const loadBrokers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/brokers');
      const data = await res.json();
      if (data.brokers) {
        setBrokersAr(data.brokers.ar || []);
        setBrokersEn(data.brokers.en || []);
      }
    } catch {
      // Use default if Firebase empty
      setBrokersAr([
        { name: 'كاسبر', link: 'https://t.me/t_e_r' },
        { name: 'ليو', link: 'https://t.me/ccmca' },
        { name: 'حازم', link: 'https://t.me/H_A_Z_M' },
        { name: 'ستيفن', link: 'https://t.me/c_o_a' },
        { name: 'محمود', link: 'https://t.me/Mahmuod' },
        { name: 'عمر', link: 'https://t.me/FAZ3a' }
      ]);
      setBrokersEn([
        { name: 'Kasper', link: 'https://t.me/t_e_r' },
        { name: 'Leo', link: 'https://t.me/ccmca' },
        { name: 'Hazem', link: 'https://t.me/H_A_Z_M' },
        { name: 'Steven', link: 'https://t.me/c_o_a' },
        { name: 'Mahmoud', link: 'https://t.me/Mahmuod' },
        { name: 'Omar', link: 'https://t.me/FAZ3a' }
      ]);
    }
    setLoading(false);
  };

  const saveBrokers = async () => {
    setSaving(true);
    try {
      await fetch('/api/admin/brokers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, ar: brokersAr, en: brokersEn }),
      });
      alert('تم الحفظ! / Saved!');
    } catch {
      alert('خطأ في الحفظ / Save error');
    }
    setSaving(false);
  };

  const addBroker = () => {
    setBrokersAr([...brokersAr, { name: '', link: '' }]);
    setBrokersEn([...brokersEn, { name: '', link: '' }]);
  };

  const removeBroker = (index) => {
    setBrokersAr(brokersAr.filter((_, i) => i !== index));
    setBrokersEn(brokersEn.filter((_, i) => i !== index));
  };

  const updateBrokerAr = (index, field, value) => {
    const updated = [...brokersAr];
    updated[index][field] = value;
    setBrokersAr(updated);
  };

  const updateBrokerEn = (index, field, value) => {
    const updated = [...brokersEn];
    updated[index][field] = value;
    setBrokersEn(updated);
  };

  if (!isAuthenticated) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: 'min(92%, 400px)',
          textAlign: 'center',
          padding: '40px 20px',
          marginInline: 'auto',
        }}
      >
        <Lock size={48} style={{ marginBottom: 20, opacity: 0.7 }} />
        <h1 style={{ fontSize: '1.5rem', marginBottom: 20 }}>
          Admin Panel / لوحة التحكم
        </h1>
        <form onSubmit={verifyPin}>
          <input
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '1.2rem',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(255,255,255,0.1)',
              color: 'inherit',
              marginBottom: 16,
              textAlign: 'center',
            }}
          />
          {error && (
            <p style={{ color: '#ff6b6b', marginBottom: 16 }}>{error}</p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: 12,
              border: 'none',
              background: 'linear-gradient(135deg, #00b4ff, #0080ff)',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Unlock / فتح
          </button>
        </form>
        <button
          onClick={() => navigateTo('main')}
          style={{
            marginTop: 20,
            padding: '10px 20px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
          }}
        >
          <ArrowLeft size={16} style={{ marginInlineEnd: 8 }} />
          {lang === 'ar' ? 'رجوع' : 'Back'}
        </button>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: 'min(92%, 800px)',
        padding: '20px',
        marginInline: 'auto',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Unlock size={24} />
          Admin / إدارة الوسطاء
        </h1>
        <button
          onClick={saveBrokers}
          disabled={saving}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            background: 'linear-gradient(135deg, #00ff88, #00cc66)',
            color: '#000',
            fontWeight: 'bold',
            cursor: saving ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Save size={16} />
          {saving ? '...' : lang === 'ar' ? 'حفظ' : 'Save'}
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {brokersAr.map((broker, index) => (
            <div
              key={index}
              style={{
                padding: 16,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                <input
                  value={broker.name}
                  onChange={(e) => updateBrokerAr(index, 'name', e.target.value)}
                  placeholder="الاسم (عربي)"
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.2)',
                    color: 'inherit',
                  }}
                />
                <input
                  value={brokersEn[index]?.name || ''}
                  onChange={(e) => updateBrokerEn(index, 'name', e.target.value)}
                  placeholder="Name (English)"
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.2)',
                    color: 'inherit',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <input
                  value={broker.link}
                  onChange={(e) => {
                    updateBrokerAr(index, 'link', e.target.value);
                    updateBrokerEn(index, 'link', e.target.value);
                  }}
                  placeholder="Telegram link"
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 8,
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'rgba(0,0,0,0.2)',
                    color: 'inherit',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                  }}
                />
                <button
                  onClick={() => removeBroker(index)}
                  style={{
                    padding: '10px',
                    borderRadius: 8,
                    border: 'none',
                    background: '#ff4444',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={addBroker}
        style={{
          width: '100%',
          marginTop: 16,
          padding: '14px',
          borderRadius: 12,
          border: '2px dashed rgba(255,255,255,0.3)',
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Plus size={20} />
        {lang === 'ar' ? 'إضافة وسيط' : 'Add Broker'}
      </button>

      <button
        onClick={() => navigateTo('main')}
        style={{
          marginTop: 20,
          padding: '12px 24px',
          borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
        }}
      >
        {lang === 'ar' ? 'رجوع للرئيسية' : 'Back to Home'}
      </button>
    </motion.section>
  );
}
