main: develop
 
develop:
	pip install -r requirements.txt
	cd ./dashboard/static && make build
