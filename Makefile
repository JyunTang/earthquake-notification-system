main: develop frontend
 
develop:
	pip install -r requirements.txt

frontend:
	cd ./dashboard/static
	npm install
	npm start
