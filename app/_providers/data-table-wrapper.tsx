




interface DataTable {
  DataOption: string,
  query: string,
  filters: object[],
}


export const dataTableWarpper = (props: DataTable) => {

  console.log(props);

  return (
    <div>dt-warpper</div>
  );
}