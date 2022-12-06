import axios from "axios";

function PingPongPage(props) {
  const { data } = props;
  const response = data.content;
  
  //JSX
  return <h1>{response}</h1>;
}

export default PingPongPage;

export async function getServerSideProps(context) {
  const res = await axios.get("https://ping-pong-api.vercel.app/api");
  const data = await res.data;

  const url = context.params.id;
  const paths = data.find((item) => item.id === url);

  if (!paths) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: paths,
    },
  };
}
