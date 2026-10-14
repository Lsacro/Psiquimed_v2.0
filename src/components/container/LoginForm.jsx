import { useState } from 'react';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [visibility, setVisibility] = useState(false);

  function handleLoginSubmit(e) {
    e.preventDefault();

    if (!user.trim() || !password) {
      alert('Por favor ingresa tu usuario y contraseña.');
      return;
    }

    const loginList = [
      { user: 'psiquimed', password: '4455AAbb' },
      { user: 'psiquimed1', password: '4455AAbb' },
    ];

    const found = loginList.find((item) => item.user === user.trim() && item.password === password);

    if (found) {
      window.location.href = '/dashboard';
    } else {
      alert('Credenciales incorrectas.');
    }
  }

  return (
    <form className='space-y-5' id='adminLoginForm' onSubmit={handleLoginSubmit}>
      {/* Campo de usuario */}
      <div>
        <label className='block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2' htmlFor='email'>
          USUARIO INSTITUCIONAL
        </label>

        <input
          className='block w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#391494] focus:border-transparent'
          id='email'
          name='email'
          placeholder='usuario'
          type='text'
          autoComplete='username'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </div>

      {/* Campo de contraseña */}
      <div>
        <label className='block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2' htmlFor='password'>
          CONTRASEÑA
        </label>

        <div className='relative rounded-xl'>
          <input
            className='block w-full px-4 pr-11 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#391494] focus:border-transparent'
            id='password'
            name='password'
            placeholder='••••••••••••'
            type={visibility ? 'text' : 'password'}
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type='button'
            aria-label={visibility ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            className='absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-700'
            onClick={() => setVisibility((prev) => !prev)}
          >
            <span className='material-symbols-outlined text-xl'>{visibility ? 'visibility_off' : 'visibility'}</span>
          </button>
        </div>
      </div>

      <button
        className='w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-[#391494] hover:bg-[#2c0f75] transition-all'
        type='submit'
      >
        <span>Ingresar al CMS</span>
        <span className='material-symbols-outlined text-lg'>arrow_forward</span>
      </button>
    </form>
  );
}
