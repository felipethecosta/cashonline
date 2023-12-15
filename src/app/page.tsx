import Sidebar from "../components/Sidebar/Sidebar";
import DailyExpensesChart from "../components/DailyExpenses/DailyExpensesChart";
import MonthlyExpensesChart from "../components/MonthlyExpenses/MonthlyExpensesChart";
import AddExpenseForm from "../components/AddExpenseForm/AddExpenseForm";
import UserCreationModal from "../components/UserCreationModal/UserCreationModal";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Dashboard Financeira
          </h2>
          {/* <UserCreationModal /> */}
          <AddExpenseForm />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Container para o gráfico diário */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                Gastos Diários
              </h3>
              <DailyExpensesChart />
            </div>
            {/* Container para o gráfico mensal */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                Gastos Mensais
              </h3>
              <MonthlyExpensesChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
