const Dashboard = () => {
  const env = JSON.stringify(import.meta.env);

  return (
    <div>
      <div className="text-2xl">Dashboard</div>

      <pre>{env}</pre>
    </div>
  );
};

export default Dashboard;
