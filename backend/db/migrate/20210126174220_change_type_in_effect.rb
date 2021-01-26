class ChangeTypeInEffect < ActiveRecord::Migration[6.1]
  def change
    change_table :effects do |t|
      t.remove :type
      t.string :effect_type
    end
  end
end
