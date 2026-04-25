export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">
        <h3>MyBlog</h3>

        <p className="footer-text">
          Sharing thoughts, stories, and ideas.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}