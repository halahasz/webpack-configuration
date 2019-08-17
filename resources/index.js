if (!global._babelPolyfill) {
	require('babel-polyfill');
}

// Vendors
import "./scss/vendor/bootstrap-grid.css";
import "./scss/vendor/simplebar.css";
import "./scss/vendor/owl.carousel.min.css";
import "./scss/vendor/owl.theme.default.min.css";
import "./scss/vendor/jquery.fancybox.css";

// Theme Sass.
import "./scss/main.scss";

// Theme JavaScript.
import "./js/main";
