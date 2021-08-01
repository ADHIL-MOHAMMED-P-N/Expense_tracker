import axios from 'axios';

const url = 'http://localhost:3000/api/expense/';

class ExpenseService {


    static getExpense() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                    const data = res.data;

                    resolve(
                        data.map(expense => ({
                            ...expense,
                            date: new Date(expense.date)
                        }))

                    );

                })
                .catch((err) => {
                    reject(err);
                })

        });
    }

    //creating expesnse
    static createExpense(expense) {
        return axios.post(url, {
            "spendTitle": expense.spendTitle,
            "spendAmount": expense.spendAmount,
            "description": expense.spendDescription,
        })
    }

    static deleteExpense(id) {
        return axios.delete(`${url}${id}`)
    }



}

export default ExpenseService;