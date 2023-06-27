# Modern Data Integration Tool
**A multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools**


## Setup

### Quick Install

```shell
python -m pip install mdit
```

### Build from source

Clone the repository

```shell
git clone https://github.com/Broomva/mdit.git
```

Install the package

``` shell
cd mdit && make install
```

### Build manually

After cloning, create a virtual environment

```shell
conda create -n mdit python=3.10
conda activate mdit
```

Install the requirements

```shell
pip install -r requirements.txt
```

Run the python installation

```shell
python setup.py install
```

## Usage

The deployment requires a .env file created under local folder:

```shell
touch .env
```

It should have a schema like this:

```toml
databricks_experiment_name=''
databricks_experiment_id=''
databricks_host=''
databricks_token=''
databricks_username=''
databricks_password=''
databricks_cluster_id=''
```

```python
import mdit 

# Create a Snowpark session
spark = DatabricksSparkSession().get_session()

# Connect to MLFLow Artifact Server
mlflow_session = DatabricksMLFlowSession().get_session()
```
