# ticketing_app

	1. minikube start --vm=true
	2. kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.40.2/deploy/static/provider/cloud/deploy.yaml
	3. minikube addone enable ingress
	4. kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<PublishingAPiKeyInTestMode>
	5. kubectl create secret generic jwt-secret --from-literal=JWT_KEY=jwt_key
	6. In client/api/build-client.js =>  baseURL: 'http://<minikubeip>',
	7. Update /etc/hosts => <minikubeip> ticketing.dev
	8. Skaffold dev
	9. Minikube tunnel - OPTIONAL

