main: develop
 
develop:
	pip install -r requirements.txt

frontend:
	cd ./dashboard/static
	npm instll
	npm start
