DateTime.Field.Hour.Test = {};

DateTime.Field.Hour.Test.testCreation = function() {
    var hour = new DateTime.Field.Hour(1);

    assertEquals(1, hour.value());
};

DateTime.Field.Hour.Test.testCreation_Empty = function() {
    assertWithTime(10 * DateTime.Field.MILLS_PER_HOUR + 1231, function () {
        var hour = new DateTime.Field.Hour();

        assertEquals(10, hour.value());
    });
};

DateTime.Field.Hour.Test.testSetValue = function() {
    var hour = new DateTime.Field.Hour().value(1);

    assertEquals(1, hour.value());
};

DateTime.Field.Hour.Test.testGetMills_Epoch = function() {
    var hour = new DateTime.Field.Hour().mills(10120);

    assertEquals(0, hour.mills());
};

DateTime.Field.Hour.Test.testGetMills_Mills_10h = function() {
    var hour = new DateTime.Field.Hour().mills(10 * DateTime.Field.MILLS_PER_HOUR + 1231);

    assertEquals(10 * DateTime.Field.MILLS_PER_HOUR, hour.mills());
};

DateTime.Field.Hour.Test.testGetMills_Mills_2h = function() {
    var hour = new DateTime.Field.Hour().mills(DateTime.Field.MILLS_PER_HOUR * 2);

    assertEquals(2 * DateTime.Field.MILLS_PER_HOUR, hour.mills());
};

DateTime.Field.Hour.Test.testSetMills_2h_Start = function() {
    var hour = new DateTime.Field.Hour().mills(DateTime.Field.MILLS_PER_HOUR * 2 + 1221);

    assertEquals(2, hour.value());
};

DateTime.Field.Hour.Test.testSetMills_2h_Before = function() {
    var hour = new DateTime.Field.Hour().mills(DateTime.Field.MILLS_PER_HOUR * 2 - 1);

    assertEquals(1, hour.value());
};

DateTime.Field.Hour.Test.testSetMills_negative = function() {
    var hour = new DateTime.Field.Hour().mills(-62130513600000);

    assertEquals(20, hour.value());
};

DateTime.Field.Hour.Test.testMaxHour_Constructor_OK = function() {
    var hour = new DateTime.Field.Hour(DateTime.Field.Hour.MAX_HOUR);

    assertEquals(DateTime.Field.Hour.MAX_HOUR, hour.value());
};

DateTime.Field.Hour.Test.testMaxHour_Constructor_Fail = function() {
    assertFail(function() {
        new DateTime.Field.Hour(DateTime.Field.Hour.MAX_HOUR + 1);
    });
};

DateTime.Field.Hour.Test.testMinHour_Constructor_OK = function() {
    var hour = new DateTime.Field.Hour(DateTime.Field.Hour.MIN_HOUR);

    assertEquals(DateTime.Field.Hour.MIN_HOUR, hour.value());
};

DateTime.Field.Hour.Test.testMinHour_Constructor_Fail = function() {
    assertFail(function() {
        new DateTime.Field.Hour(DateTime.Field.Hour.MIN_HOUR - 1);
    });
};

DateTime.Field.Hour.Test.testMaxHour_Value_OK = function() {
    var hour = new DateTime.Field.Hour().value(DateTime.Field.Hour.MAX_HOUR);

    assertEquals(DateTime.Field.Hour.MAX_HOUR, hour.value());
};

DateTime.Field.Hour.Test.testMaxHour_Value_Fail = function() {
    assertFail(function() {
        new DateTime.Field.Hour().value(DateTime.Field.Hour.MAX_HOUR + 1);
    });
};

DateTime.Field.Hour.Test.testMinHour_Value_OK = function() {
    new DateTime.Field.Hour(DateTime.Field.Hour.MIN_HOUR);
};

DateTime.Field.Hour.Test.testMinHour_Value_Fail = function() {
    assertFail(function() {
        new DateTime.Field.Hour().value(DateTime.Field.Hour.MIN_HOUR - 1);
    });
};

DateTime.Field.Hour.Test.testValidate_text = function() {
    assertFail(function() {
        DateTime.Field.Hour.validate("a");
    });
};

DateTime.Field.Hour.Test.testValidate_long = function() {
    assertFail(function() {
        DateTime.Field.Hour.validate("11231237012730198239812398");
    });
};

DateTime.Field.Hour.Test.testValidate_hex = function() {
    assertFail(function() {
        DateTime.Field.Hour.validate("0x1");
    });
};

DateTime.Field.Hour.Test.testValidate_zeroTrail = function() {
    assertEquals(12, DateTime.Field.Hour.validate("012"));
};

DateTime.Field.Hour.Test.testValidate_negative = function() {
    assertFail(function() {
        DateTime.Field.Hour.validate("-1");
    });
};
