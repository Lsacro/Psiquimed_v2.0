import { useState } from 'react';

export default function LoginForm({ onChangeError }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (loading) return;

    if (!user.trim() || !password) {
      setError('Por favor ingresa tu usuario y contraseña.');
      return;
    }

    setError('');
    setLoading(true);

    const loginList = [
      { user: 'psqmd', password: 'kL803k37JJyl' },
      { user: 'psiadmin', password: 't7eJIapAsm21' },
    ];

    const found = loginList.find((item) => item.user === user.trim() && item.password === password);

    if (found) {
      window.location.href = '/dashboard';
      return;
    }

    setLoading(false);
    onChangeError?.(true);
    setWarning(true);

    if (count < 3) {
      setCount((prev) => prev + 1);
    } else {
      setError('Demasiados intentos. Intenta nuevamente en 1 min.');
      setTimeout(() => {
        setWarning(false);
        setCount(0);
        setError('');
      }, 60000);
    }
  }

  return (
    <form className='space-y-5' id='adminLoginForm' onSubmit={handleLoginSubmit}>
      <div>
        <label className='mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700' htmlFor='email'>
          USUARIO INSTITUCIONAL
        </label>

        <input
          className='block w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#391494] disabled:opacity-60'
          id='email'
          name='email'
          placeholder='usuario'
          type='text'
          autoComplete='username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          disabled={loading}
          required
        />

        {warning && (
          <div className='mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600'>
            <span className='material-symbols-outlined shrink-0 text-[15px]'>info</span>
            <span>Verifica tu usuario</span>
          </div>
        )}
      </div>

      <div>
        <label className='mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700' htmlFor='password'>
          CONTRASEÑA
        </label>

        <div className='relative rounded-xl'>
          <input
            className='block w-full rounded-xl border border-slate-200 px-4 py-3 pr-11 text-sm text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#391494] disabled:opacity-60'
            id='password'
            name='password'
            placeholder='••••••••••••'
            type={visibility ? 'text' : 'password'}
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />

          <button
            type='button'
            aria-label={visibility ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            disabled={loading}
            className='absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 hover:text-slate-700'
            onClick={() => setVisibility((prev) => !prev)}
          >
            <span className='material-symbols-outlined text-xl'>{visibility ? 'visibility_off' : 'visibility'}</span>
          </button>
        </div>

        {warning && (
          <div className='mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600'>
            <span className='material-symbols-outlined shrink-0 text-[15px]'>info</span>
            <span>Verifica tu contraseña</span>
          </div>
        )}
      </div>

      <button
        className='flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#391494] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/25 transition-all hover:bg-[#2c0f75] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60'
        type='submit'
        disabled={loading}
      >
        <span>{loading ? 'Ingresando...' : 'Ingresar al CMS'}</span>

        <span className={`material-symbols-outlined text-lg ${loading ? 'animate-spin' : ''}`}>
          {loading ? 'progress_activity' : 'arrow_forward'}
        </span>
      </button>

      {error && (
        <p role='alert' className='mt-3 text-sm text-red-600'>
          {error}
        </p>
      )}
    </form>
  );
}
