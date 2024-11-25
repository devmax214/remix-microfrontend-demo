import type { MetaFunction } from "@remix-run/node";
import Widget1 from '../components/Widget1';

export const meta: MetaFunction = () => {
  return [
    { title: "Remote Widget" },
    { name: "widget1", content: "Remote component" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <Widget1 />
      </div>
    </div>
  );
}
