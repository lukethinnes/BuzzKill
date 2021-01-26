require "test_helper"

class EffectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @effect = effects(:one)
  end

  test "should get index" do
    get effects_url, as: :json
    assert_response :success
  end

  test "should create effect" do
    assert_difference('Effect.count') do
      post effects_url, params: { effect: { name: @effect.name } }, as: :json
    end

    assert_response 201
  end

  test "should show effect" do
    get effect_url(@effect), as: :json
    assert_response :success
  end

  test "should update effect" do
    patch effect_url(@effect), params: { effect: { name: @effect.name } }, as: :json
    assert_response 200
  end

  test "should destroy effect" do
    assert_difference('Effect.count', -1) do
      delete effect_url(@effect), as: :json
    end

    assert_response 204
  end
end
