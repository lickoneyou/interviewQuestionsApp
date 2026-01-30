interface Props {
  length: number;
}

const CodeNumber: React.FC<Props> = (props) => {
  const { length } = props;

  const array = Array.from({ length });

  return (
    <div className='number'>
      {array.map((_: any, index: number) => (
        <div className='codeNumber'>{index + 1}</div>
      ))}
    </div>
  );
};

export default CodeNumber;
