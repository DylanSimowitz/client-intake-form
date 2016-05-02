Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "cube-vagrant"
  config.vm.network "public_network",
    :dev => "br0",
    :mode => "bridge",
    :type => "bridge",
    :mac => "52:54:00:BF:F2:50"

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "./provisioning/playbook.yml"
    ansible.galaxy_role_file = "./provisioning/requirements.yml"
    ansible.galaxy_roles_path = "./provisioning/roles"
  end
end
