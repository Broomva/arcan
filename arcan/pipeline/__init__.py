from abc import ABC, abstractmethod


def create_function_from_string(
        path: str = "",
        func_code_str: str = "def process(dataframe, spark, params):\n    return dataframe",
):
    g = {}
    l = {}
    try:
        if path:
            with open(path, "r") as f:
                func_code_str = f.read()
                exec(func_code_str, g, l)
        elif func_code_str:
            exec(func_code_str, g, l)
        if l:
            return list(l.values())[0]
    except Exception as e:
        print(e)


class Pipeline(ABC):

    def __init__(self):
        pass


source_db = {'url': 'url', 'table': 'table1', 'database': 'database1', 'username': 'username1', 'password': 'password1',
             'schema': 'public', 'filter': 'filter1', 'columns': ['client_id', 'client_name']}

json_structure = {
    "sql_example": """
WITH sales_data AS (
    SELECT product_id, SUM(sales_amount) as total_sales
    FROM sales
    WHERE sales_date BETWEEN '2021-01-01' AND '2021-12-31'
    GROUP BY product_id
)
SELECT p.product_name, p.category, s.total_sales
FROM products p
JOIN sales_data s ON p.id = s.product_id
WHERE s.total_sales > 1000
ORDER BY s.total_sales DESC;
""",
    "python_example": """
def process_data(data):
    # Filter out negative numbers and square the rest
    squared = [x**2 for x in data if x >= 0]
    
    # Use lambda and map to get the square root of numbers
    square_roots = list(map(lambda x: x**0.5, squared))
    
    return {
        'original': data,
        'squared': squared,
        'square_roots': square_roots
    }
"""
}
