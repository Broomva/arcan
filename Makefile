SHELL=/bin/bash
devops_state = main
working_dir = `pwd`

install: local_build_and_deploy

local_build_and_deploy: 
	pip uninstall arcan -y \
	&& python setup.py install \
	&& modern_data_integration_tool

package_build:
	python -m build

package_list:
	unzip -l dist/*.whl  
