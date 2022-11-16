build:
	cd circuits && nargo build && cd ..

comp:
	cd circuits && nargo compile test && cd ..

prove:
	cd circuits && nargo prove test && cd ..

test:
	npx hardhat test

verify:
	cd circuits && nargo verify test && cd ..