# Mafia Client

A modern, real-time multiplayer client for the classic social deduction game **Mafia** (also known as Werewolf).

## Hosted Site

[https://mafia-client.vercel.app/](https://mafia-client.vercel.app/)

## About the Game

This application allows players to join a room and play Mafia in real-time. Players are assigned secret roles and must work together (or deceptively) to achieve their team's objective. The game cycles through Day and Night phases where players discuss, vote, and perform special actions based on their roles.

### Roles

*   **Mafia**: The villains. They wake up at night to choose a victim to eliminate. Their goal is to equal or outnumber the townspeople.
*   **Townsperson**: The innocent majority. They must find and eliminate the Mafia during the day phases.
*   **Angel**: A special role that can protect one player from being eliminated by the Mafia at night.
*   **Detective**: A special role that can investigate one player at night to learn their alignment.

### Game Phases

1.  **Lobby**: Players join the room and the host starts the game.
2.  **Introduction**: Roles are assigned and the game begins.
3.  **Night**: Special roles (Mafia, Angel, Detective) perform their actions.
4.  **Narration (Morning)**: The results of the night interactions are revealed.
5.  **Voting**: Players discuss and vote on who to eliminate (lynch) from the game.
6.  **Conclusion**: The game ends when one faction wins.

## Tech Stack

*   **Frontend**: React with TypeScript
*   **Styling**: Tailwind CSS
*   **Networking**: Colyseus.js (WebSocket-based multiplayer)
