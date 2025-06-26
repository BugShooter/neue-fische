export function getUserStatusList(data) {
    const online = [];
    const away = [];
    const offline = [];
    data.forEach(user => {
        if (user.status == 'offline') {
            offline.push(user.username);
        } else if (user.status == 'online') {
            if (user.lastActivity > 10)
                away.push(user.username);
            else
                online.push(user.username);
        }
        else throw new Error("Unexpected status ({$user.status})");
    });
    const result = {};
    if (online.length > 0) result.online = online;
    if (offline.length > 0) result.offline = offline;
    if (away.length > 0) result.away = away;

    return result;
}