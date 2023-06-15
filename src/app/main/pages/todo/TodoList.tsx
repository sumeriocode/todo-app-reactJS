import TodoListItem from "./TodoListItem";
import TodoListPagination from "./TodoListPagination";

type TodoListProps = {
    todos: Todo[];
    currentPage: number ;
    totalPages: number;
    onPageChange: (page: number) => void;
    onDelete: (todoId: number) => void;
};

function TodoList({ todos, totalPages, currentPage, onPageChange, onDelete }: TodoListProps) {
    return (<>
        {

            todos.length > 0 ? (
                <>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Task Name</th>
                                <th className="py-2 px-4 border-b"></th>
                            </tr>
                        </thead>
                        <tbody> {
                            todos.map((item) => (<TodoListItem item={item} onDelete={onDelete} />))
                        } </tbody>
                    </table>
                    <TodoListPagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                </>
            ) :
                (<div className="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                    <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <div>
                        <span className="font-medium">Ops!</span> La busqueda realizada no tiene resultados.
                    </div>
                </div>)
        }

    </>);
}
export default TodoList;
