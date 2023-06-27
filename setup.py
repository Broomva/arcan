import glob
import io
import os
import sys

import setuptools
from setuptools import find_namespace_packages, find_packages

if sys.version_info < (3, 8):
    find_namespace_packages()
    print(
        "Error: modern_data_integration_tool does not support this version of Python."
    )
    print("Please upgrade to Python 3.8 or higher.")
    sys.exit(1)


def prepare_data_files(directory, extensions):
    files = []
    for ext in extensions:
        files.extend(glob.glob(f"{directory}/*.{ext}"))
    return files


data_files_structure = [
    (
        "modern_data_integration_tool",
        prepare_data_files(
            "modern_data_integration_tool",
            ["csv", "sql", "txt", "md", "html", "css", "json", "yaml", "faiss", "pkl"],
        ),
    ),
]

# Package metadata.
name = "modern_data_integration_tool"
description = "A multiheaded modern data bridging package based on pipeline manifests to integrate between any modern (and old) data stack tools"
# Should be one of:
# 'Development Status :: 3 - Alpha'
# 'Development Status :: 4 - Beta'
# 'Development Status :: 5 - Production/Stable'
release_status = "Development Status :: 3 - Alpha"

with open("requirements.txt") as f:
    required = f.read().splitlines()
extras = {"protobuf": ["protobuf<5.0.0dev"]}

# Setup boilerplate below this line.

package_root = os.path.abspath(os.path.dirname(__file__))

version = {}
with open(os.path.join(package_root, "version.py")) as fp:
    exec(fp.read(), version)
version = version["__version__"]

readme_filename = os.path.join(package_root, "README.md")
with io.open(readme_filename, encoding="utf-8") as readme_file:
    readme = readme_file.read()

setuptools.setup(
    name=name,
    version=version,
    description=description,
    long_description=readme,
    long_description_content_type="text/markdown",
    author="Carlos D. Escobar-Valbuena",
    author_email="carlosdavidescobar@gmail.com",
    license="MIT",
    classifiers=[
        release_status,
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    packages=find_packages(),
    install_requires=required,
    extras_require=extras,
    python_requires=">=3.8",
    include_package_data=True,
    setup_requires=["setuptools", "wheel"],
    tests_require=["pytest"],
    test_suite="tests",
    zip_safe=False,
    url="https://github.com/Broomva/modern_data_integration_tool",
    package_data={
        "modern_data_integration_tool": [
            "*.json",
            "*.yaml",
            "*.sql",
            "*.csv",
            "*.txt",
            "*.md",
            "*.html",
            "*.css",
            "*.pkl",
            "*.faiss",
        ],
    },
    data_files=data_files_structure,
    py_modules=["main"],
    entry_points={
        "console_scripts": [
            "mdit=main:main",
        ],
    },
)
