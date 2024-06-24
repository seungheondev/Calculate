import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="header-img" />
      <h1>為替レート計算機</h1>
    </header>
  );
}
