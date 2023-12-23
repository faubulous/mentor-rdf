import * as n3 from "n3";

export const FIBO_AGENTS = {
	/** system that reduces or eliminates the need for human involvement in order to complete a task */
	'AutomatedSystem': 'https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutomatedSystem',
	/** something autonomous that can adapt to and interact with its environment */
	'AutonomousAgent': 'https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutonomousAgent',
}

export const fibo_agents = {
	/** system that reduces or eliminates the need for human involvement in order to complete a task */
	'AutomatedSystem': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutomatedSystem'),
	/** something autonomous that can adapt to and interact with its environment */
	'AutonomousAgent': new n3.NamedNode('https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutonomousAgent'),
}