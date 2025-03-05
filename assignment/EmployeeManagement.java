import java.util.ArrayList;
import java.util.List;

class EmployeeManagement {
    private int id;
    private String name;
    private double salary;

    public EmployeeManagement(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println();
    }

    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();

        EmployeeManagement employee1 = new EmployeeManagement(1, "John Doe", 50000.0);
        EmployeeManagement employee2 = new EmployeeManagement(2, "Jane Smith", 60000.0);
        EmployeeManagement employee3 = new EmployeeManagement(3, "Bob Johnson", 70000.0);

        employees.add(employee1);
        employees.add(employee2);
        employees.add(employee3);

        for (Employee employee : employees) {
            employee.displayDetails();
        }
    }
}


