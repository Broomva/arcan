import pytest
from pydantic import ValidationError
from arcan.model.databricks.cluster import DatabricksCluster
from arcan.model.manifest import MainModel

# Sample data for tests
valid_databricks_data = {
    "provider": "azure",
    "spark_version": "3.0",
    "custom_tags": {},
    "data_security_mode": "SINGLE_USER",
    "runtime_engine": "engine",
    "num_workers": 2,
}

valid_kubernetes_data = {
    "provider": "Kubernetes",
    "spark_version": "3.0",
}

invalid_executor = {}


@pytest.mark.parametrize(
    "executor, cluster_data, expected_error",
    [
        ("Databricks", valid_databricks_data, None),
        ("Kubernetes", valid_kubernetes_data, None),
        (
            "Databricks",
            valid_kubernetes_data,
            "For executor 'Databricks', cluster should be of type DatabricksCluster",
        ),
        (
            "Kubernetes",
            valid_databricks_data,
            "For executor 'Kubernetes', cluster should be of type KubernetesCluster",
        ),
        (
            "InvalidService",
            valid_databricks_data,
            'Executor "InvalidService" is not a valid service',
        ),
    ],
)
def test_executor_and_cluster_validation(executor, cluster_data, expected_error):
    data = {
        "executor": executor,
        "cluster": cluster_data,
        "pipeline_type": "QA",
    }
    if expected_error:
        with pytest.raises(ValidationError) as exc_info:
            model = MainModel(**data)
        assert expected_error in str(exc_info.value)
    else:
        model = MainModel(**data)
        assert model.executor in executor


def test_databricks_cluster_fields():
    data = {
        "executor": "Databricks",
        "cluster": valid_databricks_data,
        "pipeline_type": "QA",
    }
    model = MainModel(**data)
    assert isinstance(model.cluster, DatabricksCluster)
    assert model.cluster.provider == "azure"
    assert model.cluster.spark_version == "3.0"
    assert model.cluster.data_security_mode == "SINGLE_USER"


@pytest.mark.parametrize(
    "executor, expected_validity",
    [
        ("Databricks", True),
        ("Kubernetes", True),
        ("DBT", True),
        ("Local", True),
        ("k8s", False),
        ("invalid", False),
    ],
)
def test_executor_validity(executor, expected_validity):
    data = {
        "executor": executor,
        "cluster": valid_databricks_data
        if executor == "Databricks"
        else valid_kubernetes_data,
        "pipeline_type": "QA",
    }
    if expected_validity:
        model = MainModel(**data)
        assert model.executor == executor
    else:
        with pytest.raises(ValidationError) as exc_info:
            model = MainModel(**data)
        assert f'Executor "{executor}" is not a valid service' in str(exc_info.value)


@pytest.mark.parametrize(
    "pipeline_type, expected_validity",
    [
        ("QA", True),
        ("ETL", True),
        ("PROD", False),
        ("TEST", False),
        ("", False),
    ],
)
def test_pipeline_type_validity(pipeline_type, expected_validity):
    data = {
        "executor": "Databricks",
        "cluster": valid_databricks_data,
        "pipeline_type": pipeline_type,
    }
    if expected_validity:
        model = MainModel(**data)
        assert model.pipeline_type == pipeline_type
    else:
        with pytest.raises(ValidationError) as exc_info:
            model = MainModel(**data)
        expected_error_msg = f"unexpected value; permitted: 'QA', 'ETL'"
        assert expected_error_msg in str(exc_info.value)
