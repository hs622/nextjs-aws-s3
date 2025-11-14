const loading = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-5">
          <div className="bg-muted aspect-video rounded-xl md:col-span-3 p-5" />
          <div className="bg-muted aspect-video rounded-xl animate-pulse" />
          <div className="bg-muted aspect-video rounded-xl animate-pulse" />
        </div>
      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted aspect-video rounded-xl animate-pulse" />
        <div className="bg-muted aspect-video rounded-xl animate-pulse" />
        <div className="bg-muted aspect-video rounded-xl animate-pulse" />
      </div> */}
      <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min animate-pulse" />
    </div>
  );
};

export default loading;

