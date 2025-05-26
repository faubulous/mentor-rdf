import * as n3 from "n3";

const { namedNode } = n3.DataFactory;

/** Namespace URI of the FIBO_AGENTS vocabulary. */
export const _FIBO_AGENTS = 'https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/';

export const FIBO_AGENTS = {
	/** system that reduces or eliminates the need for human involvement in order to complete a task */
	'AutomatedSystem': 'https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutomatedSystem',
	/** something autonomous that can adapt to and interact with its environment */
	'AutonomousAgent': 'https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutonomousAgent',
}

/** Namespace URI of the fibo_agents vocabulary. */
export const _fibo_agents = namedNode('https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/');

export const fibo_agents = {
	/** system that reduces or eliminates the need for human involvement in order to complete a task */
	'AutomatedSystem': namedNode('https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutomatedSystem'),
	/** something autonomous that can adapt to and interact with its environment */
	'AutonomousAgent': namedNode('https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/Agents/AutonomousAgent'),
}