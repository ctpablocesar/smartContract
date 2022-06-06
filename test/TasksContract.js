const TasksContract = artifacts.require("EnterprisesContract");

contract("TasksContract", (accounts) => {
    before(async () => {
        this.tasksContract = await TasksContract.deployed();
    });

    it("migrate deployed successfully", async () => {
        const address = await this.tasksContract.address;

        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, 0x0);
        assert.notEqual(address, "");
    });

    it("get Tasks List", async () => {
        const tasksCounter = await this.tasksContract.tasksCounter();
        const task = await this.tasksContract.tasks(tasksCounter);

        assert.equal(task.id.toNumber(), tasksCounter.toNumber());
        assert.equal(task.name, "Enterprise 1");
        assert.equal(task.rfc, "Enterprise 1 RFC");
        assert.equal(task.email, "Enterprise 1 Email");
        assert.equal(task.phone, "Enterprise 1 Phone");
    });

    it("task created successfully", async () => {
        const result = await this.tasksContract.createTask("Enterprise 2", "Enterprise 2 RFC", "Enterprise 2 Email", "Enterprise 2 Phone");
        const taskEvent = result.logs[0].args;
        const tasksCounter = await this.tasksContract.tasksCounter();

        assert.equal(tasksCounter, 2);
        assert.equal(taskEvent.id.toNumber(), 2);
        assert.equal(taskEvent.task.name, "Enterprise 2");
        assert.equal(taskEvent.task.rfc, "Enterprise 2 RFC");
        assert.equal(taskEvent.task.email, "Enterprise 2 Email");
        assert.equal(taskEvent.task.phone, "Enterprise 2 Phone");

    });
});
