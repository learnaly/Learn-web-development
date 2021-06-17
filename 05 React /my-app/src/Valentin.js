function Valentin() {

  function onButtonClick() {
    const dugme = document.getElementById('dugme');

    dugme.style.background = 'green';
  }

  return (
    <header className='main-header'>
      <a href='https://google.com' id='logo'>
        <img
          alt='Logo'
          src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
        />
      </a>

      <button
        onClick={onButtonClick}
        id='dugme'
      >
        Buy now
      </button>
    </header>
  );
}

export default Valentin;