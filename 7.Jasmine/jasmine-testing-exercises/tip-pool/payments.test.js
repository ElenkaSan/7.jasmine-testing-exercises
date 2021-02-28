describe('Payments test', function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it('allPayments for submitPaymentInfo', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });
            
    it('should add an input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
      })
      
      it('should create a new payment', function () {
          let pay = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(pay);
      });
           
      it('should show allPayments and paymentTable', function() {
        // submitServerInfo()
        updateServerTable();
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        let pmtTable = document.querySelectorAll('#paymentTable tbody tr td');
                
        expect(pmtTable.length).toEqual(4);
        expect(pmtTable[0].innerText).toEqual('$100');
        expect(pmtTable[1].innerText).toEqual('$20');
        expect(pmtTable[2].innerText).toEqual('%20');
        expect(pmtTable[3].innerText).toEqual('x');
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