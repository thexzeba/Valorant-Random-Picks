const tierAgentsByMap = {
    ascent: {
        sPlus: ["Jett", "Sova"],
        s: ["Reyna", "Killjoy", "Omen","Clove"],
        a: ["Cypher", "Phoenix", "Sage", "Viper", "Iso", "Chamber","Vyse"],
        b: ["Gekko", "Neon", "Yoru", "Brimstone", "Raze", "KAY/O"],
        c: ["Astra", "Deadlock", "Skye", "Breach"],
        d: ["Fade", "Harbor", "Viper"]
    },
    split: {
        sPlus: ["Jett", "Reyna"],
        s: ["Raze", "Sage", "Chamber","Clove"],
        a: ["Cypher", "Neon", "Astra", "Iso", "Omen","Vyse"],
        b: ["Phoenix","Gekko","Yoru","Skye","Sova","Breach"],
        c: ["Brimstone","Killjoy","KAY/O", "Fade"],
        d: ["Deadlock","Viper","Harbor"]
    },
    fracture: {
        sPlus: ["Jett", "Reyna"],
        s: ["Iso","Clove","Neon","Vyse"],
        a: ["Sage","Chamber","Raze","Phoenix","Breach","Brimstone"],
        b: ["Killjoy","Omen","Cypher","Yoru","Sova","Astra"],
        c: ["Gekko","Deadlock","Viper","KAY/O"],
        d: ["Fade","Skye","Harbor"]
    },
    bind: {
        sPlus: ["Clove", "Reyna"],
        s: ["Raze","Jett","Cypher","Sage"],
        a: ["Brimstone","Chamber","Skye","Gekko","Iso","Neon"],
        b: ["Phoenix","Vyse","Deadlock","Fade","Viper","Sova"],
        c: ["Omen","Yoru","Breach","KAY/O"],
        d: ["Killjoy","Astra","Harbor"]
    },
    breeze: {
        sPlus: ["Jett", "Reyna"],
        s: ["Chamber","Clove", "Neon", "Viper"],
        a: ["Sova","Yoru","Vyse","Iso", "Cypher","Sage"],
        b: ["Raze", "Omen", "Phoenix", "KAY/O", "Killjoy","Gekko"],
        c: ["Deadlock","Harbor", "Breach", "Skye"],
        d: ["Astra","Fade","Brimstone"]
    },
    abyss: {
        sPlus: ["Jett", "Clove"],
        s: ["Reyna","Sova","Cypher","Iso"],
        a: ["Gekko","Sage","Omen","Chamber","Vyse", "Neon"],
        b: ["Breach","Astra","Raze","Yoru","Deadlock","KAY/O"],
        c: ["Brimstone","Phoenix","Skye","Viper"],
        d: ["Killjoy","Fade","Harbor"]
    },
    lotus: {
        sPlus: ["Clove", "Reyna"],
        s: ["Jett","Raze","Chamber","Gekko"],
        a: ["Omen","Neon","Iso", "Killjoy","Phoenix","Fade"],
        b: ["Sage","Cypher","Breach","Vyse","Brimstone","Sova"],
        c: ["Yoru","Skye","Astra","Viper"],
        d: ["Deadlock","KAY/O","Harbor"]
    },
    sunset: {
        sPlus: ["Clove", "Cypher"],
        s: ["Jett","Raze","Reyna","Sova"],
        a: ["Gekko", "Neon","Iso", "Chamber", "Omen","Sage"],
        b: ["Phoenix","Vyse", "Breach", "Deadlock", "Astra", "Fade"],
        c: ["Brimstone","Yoru", "Skye", "Killjoy"],
        d: ["KAY/O","Viper", "Harbor"]
    },
    pearl: {
        sPlus: ["Jett","Reyna"],
        s: ["Chamber","Neon","Clove","Vyse"],
        a: ["Iso","Sage","Phoenix","Killjoy", "Raze","Gekko"],
        b: ["Astra","Cypher","Viper","Omen","Yoru","Fade"],
        c: ["Sova", "Harbor", "KAY/O", "Skye"],
        d: ["Deadlock","Breach","Brimstone"]
    },
    icebox: {
        sPlus: ["Jett","Reyna"],
        s: ["Sova","Clove","Viper","Chamber"],
        a: ["Killjoy","Iso","Raze","Sage","Omen","Neon"],
        b: ["Gekko","Phoenix","Vyse","Yoru","Cypher","Fade"],
        c: ["Brimstone","Astra", "Harbor","KAY/O"],
        d: ["Breach","Deadlock","Skye"]
    },
    haven: {
        sPlus: ["Jett","Reyna"],
        s: ["Clove","Sova","Omen","Cypher"],
        a: ["Iso","Neon","Chamber","Sage","Killjoy","Phoenix"],
        b: ["Raze","Vyse","Breach","Brimstone","Gekko","Yoru"],
        c: ["Skye","Astra","KAY/O","Fade"],
        d: ["Viper","Deadlock","Harbor"]
    },
    // Añadir otros mapas con su tier correspondiente...
};

// Mapeo de roles repetidos según el mapa
const roleDistribution = {
    ascent: ["controller", "initiator", "sentinel", "duelist", "controller"], // Repite controller
    bind: ["controller", "initiator", "sentinel", "duelist", "initiator"], // Repite initiator
    breeze: ["controller", "initiator", "sentinel", "duelist", "duelist"], // Repite duelist
    haven: ["controller", "initiator", "sentinel", "duelist", "controller"], // Repite controller
    icebox: ["controller", "initiator", "sentinel", "duelist", "sentinel"], // Repite sentinel
    fracture: ["controller", "initiator", "sentinel", "duelist", "initiator"], // Repite initiator
    lotus: ["controller", "initiator", "sentinel", "duelist", "controller"], // Repite controller
    split: ["controller", "initiator", "sentinel", "duelist", "duelist"], // Repite duelist
    pearl: ["controller", "initiator", "sentinel", "duelist", "controller"], // Repite controller
    abyss: ["controller", "initiator", "sentinel", "duelist", "sentinel"], // Repite sentinel
    sunset: ["controller", "initiator", "sentinel", "duelist", "initiator"]// Repite initiator
};

// Lista de agentes por rol
const agentsByRole = {
    controller: ["Brimstone", "Viper", "Omen", "Astra", "Harbor","Clove"],
    initiator: ["Sova", "Skye", "Breach", "KAY/O", "Fade","Gekko"],
    sentinel: ["Sage", "Cypher", "Killjoy", "Chamber", "Deadlock","Vyse"],
    duelist: ["Jett", "Phoenix", "Reyna", "Raze", "Yoru", "Neon","Iso"]
};

// Función para mezclar una lista de elementos
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Función para actualizar el contenido del Tier List
function updateTierList() {
    const map = document.getElementById("map").value; // Obtener el mapa seleccionado
    const tiers = tierAgentsByMap[map]; // Usar tierAgentsByMap en lugar de tierLists
    let tierListText = "";

    if (tiers) {
        // Recorremos los tiers disponibles en el mapa seleccionado
        for (const [tier, agents] of Object.entries(tiers)) {
            tierListText += `<strong>Tier ${tier.toUpperCase()}:</strong> ${agents.join(", ")}<br>`;
        }
    } else {
        tierListText = "No hay datos disponibles para este mapa.";
    }

    document.getElementById("tierListText").innerHTML = tierListText; // Actualizar el contenido del acordeón
}

// Llamar a la función cuando se cambie el mapa
document.getElementById("map").addEventListener("change", updateTierList);

// Función para mostrar/ocultar el acordeón
function toggleAccordion() {
    const content = document.getElementById("tierListContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
// Función para obtener los agentes en función de los tiers seleccionados y el rol asignado
function getAgentsByTiers(map, role, useMeta) {
    const availableAgents = [];

    // Si el checkbox de meta está activado, seleccionamos solo de S+, S y A
    const selectedTiers = useMeta ? ["sPlus", "s", "a"] : ["sPlus", "s", "a", "b", "c", "d"];

    // Recorremos los tiers seleccionados y agregamos los agentes de esos tiers que coincidan con el rol
    selectedTiers.forEach(tier => {
        if (tierAgentsByMap[map][tier]) {
            tierAgentsByMap[map][tier].forEach(agent => {
                if (agentsByRole[role].includes(agent)) {  // Filtramos los agentes que coinciden con el rol
                    availableAgents.push({ agent, tier });  // Guardamos también el tier del agente
                }
            });
        }
    });

    return availableAgents;
}

// Función para asignar un agente, considerando si se usan agentes del meta y filtrando por rol
function assignAgentFromTiers(role, alreadyAssignedAgents, previousAgent = null, useMeta = false, map = null) {
    let availableAgents = getAgentsByTiers(map, role, useMeta).filter(({ agent }) =>
        !alreadyAssignedAgents.includes(agent) && agent !== previousAgent);

    const randomIndex = Math.floor(Math.random() * availableAgents.length);
    return availableAgents[randomIndex];  // Retorna un objeto con el agente y su tier
}

// Asignación de roles y agentes
document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los nombres de los jugadores
    const players = [
        document.getElementById("player1").value,
        document.getElementById("player2").value,
        document.getElementById("player3").value,
        document.getElementById("player4").value,
        document.getElementById("player5").value
    ];

    // Obtener el mapa seleccionado
    const map = document.getElementById("map").value;

    // Obtener si se deben usar agentes del meta
    const useMeta = document.getElementById("metaAgents").checked;

    // Asignar los roles según el mapa, mezclando aleatoriamente
    let roles = roleDistribution[map];
    roles = shuffle(roles); // Mezcla los roles para que sean asignados de manera aleatoria

    // Almacenar agentes y re-rolls para cada jugador
    const playerData = players.map((player, index) => {
        return {
            player,
            role: roles[index],
            agent: null,  // Aún no asignamos agente
            tier: null,  // Guardamos también el tier
            rerollCount: 0
        };
    });

    // Mapeo para asegurarnos que no se repita el mismo agente en roles duplicados
    const assignedAgentsByRole = {};

    // Asignación de agentes iniciales, respetando la duplicación de roles
    playerData.forEach(data => {
        // Crear un registro para los roles duplicados
        if (!assignedAgentsByRole[data.role]) {
            assignedAgentsByRole[data.role] = [];
        }
        // Asignar un agente según si se usa meta y respetando el rol
        const assignedAgent = assignAgentFromTiers(data.role, assignedAgentsByRole[data.role], null, useMeta, map);
        data.agent = assignedAgent.agent;  // Asignamos el agente
        data.tier = assignedAgent.tier;  // Asignamos el tier
        assignedAgentsByRole[data.role].push(data.agent);  // Marcar el agente como asignado
    });

    // Mostrar la asignación inicial de roles, agentes y tiers
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h3>Roles, Agentes y Tiers Asignados</h3>";
    playerData.forEach((data, index) => {
        outputDiv.innerHTML += `
            <p id="player-${index}">
                ${data.player}: ${data.role} - Agente: ${data.agent} (Tier: ${data.tier}) 
                <button onclick="rerollAgent(${index})">Rerolear Agente</button>
            </p>`;
    });
    // Función para "rolear" un nuevo agente
    window.rerollAgent = function(index) {
        const data = playerData[index];
        if (data.rerollCount < 2) {  // Limitar los intentos de reroll a 2
            data.rerollCount++;
            
            // Quitar el agente anterior del registro para que quede disponible para otros
            const agentIndex = assignedAgentsByRole[data.role].indexOf(data.agent);
            if (agentIndex !== -1) {
                assignedAgentsByRole[data.role].splice(agentIndex, 1);
            }
    
            // Asignar un nuevo agente, excluyendo el agente anterior
            const previousAgent = data.agent;
            const assignedAgent = assignAgentFromTiers(data.role, assignedAgentsByRole[data.role], previousAgent, useMeta, map);
            
            // Verificar si se encontró un agente disponible
            if (assignedAgent) {
                data.agent = assignedAgent.agent;
                data.tier = assignedAgent.tier;
    
                // Marcar el nuevo agente como asignado
                assignedAgentsByRole[data.role].push(data.agent);
                
                // Actualizar el HTML con el nuevo agente y su tier
                document.getElementById(`player-${index}`).innerHTML = `
                    ${data.player}: ${data.role} - Agente: ${data.agent} (Tier: ${data.tier}) 
                    <button onclick="rerollAgent(${index})">Rerolear Agente (${2 - data.rerollCount} intentos restantes)</button>`;
            } else {
                alert(`No hay más agentes disponibles para el rol ${data.role}.`);
            }
        } else {
            alert(`${data.player} ya no puede re-rollear más agentes.`);
        }
    };
    
});
