import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Plus, Trash2, Save, ArrowLeft, Radio, Gavel } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

const defaultSuperBrokers = {
  ar: [
    { name: 'كاسبر', link: 'https://t.me/t_e_r' },
    { name: 'ليو', link: 'https://t.me/ccmca' },
    { name: 'حازم', link: 'https://t.me/H_A_Z_M' },
    { name: 'ستيفن', link: 'https://t.me/c_o_a' },
    { name: 'محمود', link: 'https://t.me/Mahmuod' },
    { name: 'عمر', link: 'https://t.me/FAZ3a' }
  ],
  en: [
    { name: 'Kasper', link: 'https://t.me/t_e_r' },
    { name: 'Leo', link: 'https://t.me/ccmca' },
    { name: 'Hazem', link: 'https://t.me/H_A_Z_M' },
    { name: 'Steven', link: 'https://t.me/c_o_a' },
    { name: 'Mahmoud', link: 'https://t.me/Mahmuod' },
    { name: 'Omar', link: 'https://t.me/FAZ3a' }
  ]
};

const defaultAuctionBrokers = {
  ar: [
    { name: 'كاسبر', link: 'https://t.me/t_e_r' },
    { name: 'ليو', link: 'https://t.me/ccmca' },
  ],
  en: [
    { name: 'Kasper', link: 'https://t.me/t_e_r' },
    { name: 'Leo', link: 'https://t.me/ccmca' },
  ]
};

const inputStyle = {
  flex: 1,
  padding: 10,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'rgba(0,0,0,0.2)',
  color: 'inherit',
};

function BrokerEditor({ titleAr, titleEn, accentColor, brokersAr, brokersEn, onUpdateAr, onUpdateEn, onAdd, onRemove, saving, onSave, lang }) {
  return (
    <div style={{
      marginBottom: 32,
      padding: 20,
      borderRadius: 16,
      border: `1px solid ${accentColor}40`,
      background: `${accentColor}08`
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%',
            background: accentColor,
            display: 'inline-block',
            boxShadow: `0 0 8px ${accentColor}`
          }} />
          {lang === 'ar' ? titleAr : titleEn}
          <span style={{
            fontSize: '0.8rem',
            padding: '2px 10px',
            borderRadius: 20,
            background: `${accentColor}30`,
            border: `1px solid ${accentColor}60`
          }}>
            {brokersAr.length}
          </span>
        </h2>
        <button
          onClick={onSave}
          disabled={saving}
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            border: 'none',
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
            color: '#000',
            fontWeight: 'bold',
            cursor: saving ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: '0.9rem'
          }}
        >
          <Save size={14} />
          {saving ? '...' : lang === 'ar' ? 'حفظ' : 'Save'}
        </button>
      </div>

      {/* Brokers List */}
      <div style={{ display: 'grid', gap: 10 }}>
        {brokersAr.map((broker, index) => (
          <div
            key={index}
            style={{
              padding: 14,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
              <input
                value={broker.name}
                onChange={(e) => onUpdateAr(index, 'name', e.target.value)}
                placeholder="الاسم (عربي)"
                style={inputStyle}
              />
              <input
                value={brokersEn[index]?.name || ''}
                onChange={(e) => onUpdateEn(index, 'name', e.target.value)}
                placeholder="Name (English)"
                style={inputStyle}
              />
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input
                value={broker.link}
                onChange={(e) => {
                  onUpdateAr(index, 'link', e.target.value);
                  onUpdateEn(index, 'link', e.target.value);
                }}
                placeholder="https://t.me/username"
                style={{ ...inputStyle, fontFamily: 'monospace', fontSize: '0.85rem' }}
              />
              <button
                onClick={() => onRemove(index)}
                style={{
                  padding: '10px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#ff4444',
                  color: 'white',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        onClick={onAdd}
        style={{
          width: '100%',
          marginTop: 12,
          padding: '12px',
          borderRadius: 10,
          border: `2px dashed ${accentColor}60`,
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <Plus size={18} />
        {lang === 'ar' ? 'إضافة وسيط' : 'Add Broker'}
      </button>
    </div>
  );
}

export default function AdminSection() {
  const { navigateTo, lang } = useApp();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Super Brokers State
  const [superBrokersAr, setSuperBrokersAr] = useState([]);
  const [superBrokersEn, setSuperBrokersEn] = useState([]);
  const [savingSuper, setSavingSuper] = useState(false);

  // Auction Brokers State
  const [auctionBrokersAr, setAuctionBrokersAr] = useState([]);
  const [auctionBrokersEn, setAuctionBrokersEn] = useState([]);
  const [savingAuction, setSavingAuction] = useState(false);

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
        loadAllBrokers();
      } else {
        setError('PIN غير صحيح / Invalid PIN');
      }
    } catch {
      setError('خطأ في الاتصال / Connection error');
    }
  };

  const loadAllBrokers = async () => {
    setLoading(true);
    try {
      // Load super brokers
      const superRes = await fetch('/api/admin/brokers');
      const superData = await superRes.json();
      if (superData.brokers) {
        setSuperBrokersAr(superData.brokers.ar || defaultSuperBrokers.ar);
        setSuperBrokersEn(superData.brokers.en || defaultSuperBrokers.en);
      } else {
        setSuperBrokersAr(defaultSuperBrokers.ar);
        setSuperBrokersEn(defaultSuperBrokers.en);
      }
    } catch {
      setSuperBrokersAr(defaultSuperBrokers.ar);
      setSuperBrokersEn(defaultSuperBrokers.en);
    }

    try {
      // Load auction brokers
      const auctionRes = await fetch('/api/admin/auction-brokers');
      const auctionData = await auctionRes.json();
      if (auctionData.brokers) {
        setAuctionBrokersAr(auctionData.brokers.ar || defaultAuctionBrokers.ar);
        setAuctionBrokersEn(auctionData.brokers.en || defaultAuctionBrokers.en);
      } else {
        setAuctionBrokersAr(defaultAuctionBrokers.ar);
        setAuctionBrokersEn(defaultAuctionBrokers.en);
      }
    } catch {
      setAuctionBrokersAr(defaultAuctionBrokers.ar);
      setAuctionBrokersEn(defaultAuctionBrokers.en);
    }

    setLoading(false);
  };

  const saveSuperBrokers = async () => {
    setSavingSuper(true);
    try {
      const res = await fetch('/api/admin/brokers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, ar: superBrokersAr, en: superBrokersEn }),
      });
      if (res.ok) {
        alert(lang === 'ar' ? 'تم حفظ وسطاء السوبر!' : 'Super Brokers saved!');
      } else {
        alert(lang === 'ar' ? 'خطأ في الحفظ' : 'Save error');
      }
    } catch {
      alert(lang === 'ar' ? 'خطأ في الحفظ' : 'Save error');
    }
    setSavingSuper(false);
  };

  const saveAuctionBrokers = async () => {
    setSavingAuction(true);
    try {
      const res = await fetch('/api/admin/auction-brokers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, ar: auctionBrokersAr, en: auctionBrokersEn }),
      });
      if (res.ok) {
        alert(lang === 'ar' ? 'تم حفظ وسطاء المزاد!' : 'Auction Brokers saved!');
      } else {
        alert(lang === 'ar' ? 'خطأ في الحفظ' : 'Save error');
      }
    } catch {
      alert(lang === 'ar' ? 'خطأ في الحفظ' : 'Save error');
    }
    setSavingAuction(false);
  };

  // Super broker helpers
  const addSuperBroker = () => {
    setSuperBrokersAr([...superBrokersAr, { name: '', link: '' }]);
    setSuperBrokersEn([...superBrokersEn, { name: '', link: '' }]);
  };
  const removeSuperBroker = (i) => {
    setSuperBrokersAr(superBrokersAr.filter((_, idx) => idx !== i));
    setSuperBrokersEn(superBrokersEn.filter((_, idx) => idx !== i));
  };
  const updateSuperAr = (i, field, val) => {
    const u = [...superBrokersAr]; u[i][field] = val; setSuperBrokersAr(u);
  };
  const updateSuperEn = (i, field, val) => {
    const u = [...superBrokersEn]; u[i][field] = val; setSuperBrokersEn(u);
  };

  // Auction broker helpers
  const addAuctionBroker = () => {
    setAuctionBrokersAr([...auctionBrokersAr, { name: '', link: '' }]);
    setAuctionBrokersEn([...auctionBrokersEn, { name: '', link: '' }]);
  };
  const removeAuctionBroker = (i) => {
    setAuctionBrokersAr(auctionBrokersAr.filter((_, idx) => idx !== i));
    setAuctionBrokersEn(auctionBrokersEn.filter((_, idx) => idx !== i));
  };
  const updateAuctionAr = (i, field, val) => {
    const u = [...auctionBrokersAr]; u[i][field] = val; setAuctionBrokersAr(u);
  };
  const updateAuctionEn = (i, field, val) => {
    const u = [...auctionBrokersEn]; u[i][field] = val; setAuctionBrokersEn(u);
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
              boxSizing: 'border-box'
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
        padding: '20px 20px 80px',
        marginInline: 'auto',
      }}
    >
      {/* Page Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <h1 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: 10, margin: 0 }}>
          <Unlock size={22} />
          {lang === 'ar' ? 'لوحة إدارة الوسطاء' : 'Brokers Admin Panel'}
        </h1>
        <button
          onClick={() => navigateTo('main')}
          style={{
            padding: '8px 16px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}
        >
          {lang === 'ar' ? 'رجوع للرئيسية' : 'Back to Home'}
        </button>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', opacity: 0.6 }}>Loading...</p>
      ) : (
        <>
          {/* Super Brokers */}
          <BrokerEditor
            titleAr="وسطاء السوبر"
            titleEn="Super Brokers"
            accentColor="#00b4ff"
            brokersAr={superBrokersAr}
            brokersEn={superBrokersEn}
            onUpdateAr={updateSuperAr}
            onUpdateEn={updateSuperEn}
            onAdd={addSuperBroker}
            onRemove={removeSuperBroker}
            saving={savingSuper}
            onSave={saveSuperBrokers}
            lang={lang}
          />

          {/* Auction Brokers */}
          <BrokerEditor
            titleAr="وسطاء المزاد"
            titleEn="Auction Brokers"
            accentColor="#ff8c00"
            brokersAr={auctionBrokersAr}
            brokersEn={auctionBrokersEn}
            onUpdateAr={updateAuctionAr}
            onUpdateEn={updateAuctionEn}
            onAdd={addAuctionBroker}
            onRemove={removeAuctionBroker}
            saving={savingAuction}
            onSave={saveAuctionBrokers}
            lang={lang}
          />
        </>
      )}
    </motion.section>
  );
}
