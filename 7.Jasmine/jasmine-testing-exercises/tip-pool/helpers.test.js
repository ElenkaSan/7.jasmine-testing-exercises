describe('Helper test', function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
   
    it('total sum of tip for sumPaymentTotal', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;      
        submitPaymentInfo();
        
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
  
    it('total sum of bill for sumPaymentTotal', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
   
    it('total sum of tip percent for sumPaymentTotal', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
   
    it('sum precent of one tip for calculateTipPercent', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    it('appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');      
        appendTd(newTr, 'check');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('check');
    });
  
    it('appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('x');
    });
      
    afterEach(function() {
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = ''; 
        summaryTds.innerHTML = '';
        serverTbody.innerHTML = ''; 
    });
  });
