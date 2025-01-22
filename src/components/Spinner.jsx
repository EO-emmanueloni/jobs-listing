import { ClipLoader } from "react-spinners";

function Spinner  (loading)  {
    const overide = {
        display: 'block',
        margin: '100px auto',
    }
  return (
    <div className="spinner">
        <ClipLoader color={'#123abc'} loading={loading} size={150}
        cssOverride={overide} />
    </div>
  );
}
export default Spinner;