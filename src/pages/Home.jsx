<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trailerflix</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css">
    <link rel="stylesheet" href="./css/style.css">
    <script defer src="./js/app.js"></script>
    <script defer src="./js/login.js"></script>
</head>
<body class="black-background">
    <header>
        <div class="title">
            <h1 class="red-text logo-title">TRAILERFLIX</h1>
        </div>
        <div class="login-container">
            <form id="loginForm" style="display: none;">
                <input type="text" id="username" placeholder="Usuario" required>
                <input type="password" id="password" placeholder="Contraseña" required>
                <button type="submit">Ingresar</button>
            </form>
            <div id="userInfo" style="display: none;">
                <span id="userNameDisplay"></span>
                <button id="logoutBtn">Cerrar sesión</button>
            </div>
        </div>
    </header>
    <main>
        <article class="filters"></article>
        <article class="container loading">
            <div class="loader"></div>
        </article>
    </main>
</body>
</html>