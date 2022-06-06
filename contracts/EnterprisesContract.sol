// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract EnterprisesContract {
    uint256 public tasksCounter = 1;

    struct Task {
        uint256 id;
        string name;
        string rfc;
        string email;
        string phone;
    }

    event TaskCreated(
        uint256 id,
        string name,
        string rfc,
        string email,
        string phone
    );

    mapping(uint256 => Task) public tasks;

    constructor() {
        createTask(
            "Enterprise 1",
            "Enterprise 1 RFC",
            "Enterprise 1 Email",
            "Enterprise 1 Phone"
        );
    }

    function createTask(
        string memory _name,
        string memory _rfc,
        string memory _email,
        string memory _phone
    ) public {
        tasksCounter++;
        tasks[tasksCounter] = Task(
            tasksCounter,
            _name,
            _rfc,
            _email,
            _phone
        );
        emit TaskCreated(
            tasksCounter, 
            _name, 
            _rfc, 
            _email, 
            _phone
        );
    }
}
