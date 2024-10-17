import Counter from "@/components";
// import ISCounter from "remote/uicounter";

Index.getInitialProps = async () => {
  return {};
};

export default function Index() {
  return (
    <div>
      <Counter />
    </div>
  );
}
