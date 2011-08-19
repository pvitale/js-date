DateTime.Field.Day.Test = {};

DateTime.Field.Day.Test.testCreation = function() {
    var day = new DateTime.Field.Day(mock({time: time(2011, 1, 1)}));

    assertEquals(DateTime.Field.Day.SATURDAY, day.value());
};

DateTime.Field.Day.Test.testCreation_Empty = function() {
    assertFail(function () {
        new DateTime.Field.Day();
    });
};

DateTime.Field.Day.Test.testSetValue = function() {
    var day = DateTime.Field.Day.Test.createDay().value(DateTime.Field.Day.MONDAY);

    assertEquals(DateTime.Field.Day.MONDAY, day.value());
};

DateTime.Field.Day.Test.testGetMills_Epoch_Mon = function() {
    var day = DateTime.Field.Day.Test.createDay(DateTime.Field.Day.MONDAY).millis(10120);

    assertEquals(3 * DateTime.MILLS_PER_DAY, day.millis());
};

DateTime.Field.Day.Test.testGetMills_Epoch_Sun = function() {
    var day = DateTime.Field.Day.Test.createDay(DateTime.Field.Day.SUNDAY).millis(10120);

    assertEquals(4 * DateTime.MILLS_PER_DAY, day.millis());
};

DateTime.Field.Day.Test.testGetMills_Epoch_Thu = function() {
    var day = DateTime.Field.Day.Test.createDay(DateTime.Field.Day.THURSDAY).millis(10120);

    assertEquals(0, day.millis());
};

DateTime.Field.Day.Test.testGetMills_Mills = function() {
    var day = DateTime.Field.Day.Test.createDay().millis(time(2011, 8, 12));

    assertEquals((DateTime.Field.Day.FRIDAY - 1) * DateTime.MILLS_PER_DAY, day.millis());
};

DateTime.Field.Day.Test.testGetMills_Value = function() {
    var day = DateTime.Field.Day.Test.createDay().value(DateTime.Field.Day.SUNDAY);

    assertEquals((DateTime.Field.Day.SUNDAY - 1) * DateTime.MILLS_PER_DAY, day.millis());
};

DateTime.Field.Day.Test.testValidate_text = function() {
    assertFail(function() {
        DateTime.Field.Day.validate("a");
    });
};

DateTime.Field.Day.Test.testValidate_long = function() {
    assertFail(function() {
        DateTime.Field.Day.validate("11231237012730198239812398");
    });
};

DateTime.Field.Day.Test.testValidate_hex = function() {
    assertFail(function() {
        DateTime.Field.Day.validate("0x1");
    });
};

DateTime.Field.Day.Test.testValidate_zeroTrail = function() {
    assertEquals(7, DateTime.Field.Day.validate("07"));
};

DateTime.Field.Day.Test.testValidate_negative = function() {
    assertFail(function() {
        DateTime.Field.Day.validate("-1");
    });
};

DateTime.Field.Day.Test.createDay = function(firstDay, _time) {
    firstDay = DateTime.exists(firstDay, DateTime.Field.Day.MONDAY);
    _time = DateTime.exists(_time, time(2000, 12, 2, 12, 3, 5));

    return new DateTime.Field.Day(mock({
        time: _time,
        firstDay: firstDay
    }));
};