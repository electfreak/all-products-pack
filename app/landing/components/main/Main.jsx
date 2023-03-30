import "./main.pcss";
import Cover from "../cover/Cover";
import Advantages from "../advantages/Advantages";
import ToolboxApp from "../toolboxApp/ToolboxApp";
import Partners from "../partners/Partners";
import Faq from "../faq/Faq";

export default function Main() {
  return (
    <main className="main">
      <Cover />
      <Advantages />
      <ToolboxApp />
      <Partners />
      <Faq />
    </main>
  );
}
