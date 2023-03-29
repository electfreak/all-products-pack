import "./main.pcss";
import Cover from "../cover/Cover";
import Advantages from "../advantages/Advantages";
import ToolboxApp from "../toolboxApp/ToolboxApp";

export default function Main() {
  return (
    <main className="main">
      <Cover />
      <Advantages />
      <ToolboxApp />
    </main>
  );
}
