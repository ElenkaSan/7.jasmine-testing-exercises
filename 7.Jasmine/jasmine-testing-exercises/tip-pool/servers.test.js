describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add an input', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })
  
  it('should show allServers and ServerTable', function() {
    submitServerInfo()
    updateServerTable();

    let srTable = document.querySelectorAll('#serverTable tbody tr td');
    expect(srTable.length).toEqual(3);
    expect(srTable[0].innerText).toEqual('Alice');
    expect(srTable[1].innerText).toEqual('$0.00');
    expect(srTable[2].innerText).toEqual('x');  
  });

  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  
    // teardown logic
  });
});





