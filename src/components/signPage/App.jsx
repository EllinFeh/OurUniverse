function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Bem vindo(a)</h1>

        <div className="card text-center">
  <div className="card-header">
    Seu Login:
  </div>

  <div className="card-body">
  <div className="input-group">
  <div>
  <div className="input-group mb-3">
  <div className="input-group-text">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
  </div>

  <input type="text" placeholder="Username" className="form-control" aria-label="Text input with checkbox"/>
</div>

<div className="input-group">
  <div className="input-group-text">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
</svg>
  </div>
  <input placeholder="Senha" type="text" className="form-control" aria-label="Text input with radio button"/>
</div>
  </div>
</div>
    <a href="/" className="btn btn-primary mb-3">Entrar</a>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;
