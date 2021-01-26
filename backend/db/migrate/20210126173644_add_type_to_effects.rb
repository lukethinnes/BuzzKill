class AddTypeToEffects < ActiveRecord::Migration[6.1]
  def change
    change_table :effects do |t|
      t.string :type
    end
  end
end
