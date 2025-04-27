const data = {
    unidad2: [
        { 
            question: "¿Con qué comando se puede cambiar el nombre de un archivo?",
            answers: [
                { text: "rm", correct: false },
                { text: "chuchuli ", correct: false },
                { text: "cp", correct: false },
                { text: "mv ", correct: true }
            ]
        },
        {
            question: "Con el comando X se pueden borrar archivos. ",
            answers: [
                { text: "X = mv", correct: false },
                { text: "X = cp", correct: false },
                { text: "X = rm", correct: true },
                { text: "X = ls", correct: false }
            ]
        },
        {
            question: "¿Con qué comando se pudo ver el manual de opciones de un comando?",
            answers: [
                { text: "chown", correct: false },
                { text: "nano", correct: false },
                { text: "vim ", correct: false },
                { text: "man", correct: true }
            ]
        },
        {
            question: "Con el comando “ls -l” se pueden listar archivos ocultos.",
            answers: [
                { text: "Verdadero", correct: false },
                { text: "Falso", correct: true }
            ]
        },
        {
            question: "Se pueden crear directorios con el comando X.",
            answers: [
                { text: "X = nano", correct: false },
                { text: "X = vim", correct: false },
                { text: "X = mkdir ", correct: true },
                { text: "X = touch", correct: false }
            ]
        },
        {
            question: "¿Con qué comando se pudo listar el contenido de las carpetas?",
            answers: [
                { text: "cp", correct: false },
                { text: "mv ", correct: false },
                { text: "pwd ", correct: false },
                { text: "ls ", correct: true }
            ]
        },
        {
            question: "¿Con qué comandos se pueden copiar archivos o directorios?",
            answers: [
                { text: "cp", correct: true },
                { text: "rm", correct: false },
                { text: "papupuchilo", correct: false },
                { text: "run", correct: false }
            ]
        },
        {
            question: "Con el comando “pwd” se puede ver sobre qué directorio se está posicionado.",
            answers: [
                { text: "Verdadero", correct: true },
                { text: "Falso", correct: false }
            ]
        },
        {
            question: "¿Con qué comando se pudo ver el contenido del archivo3?",
            answers: [
                { text: "chmod ", correct: false },
                { text: "cat ", correct: true },
                { text: "ls", correct: false },
                { text: "sudo ", correct: false }
            ]
        },
        {
            question: "Con el comando X se puede cambiar de directorio. ",
            answers: [
                { text: "X = nano", correct: false },
                { text: "X = cd", correct: true },
                { text: "X = mkdir ", correct: false },
                { text: "X = touch", correct: false }
            ]
        }
    ],
    unidad3: [
        {
            question: "Cuando se ejecuta el comando 'grep' con la opción '-i', se están buscando palabras, sin importar si están en mayúscula o minúscula.",
            answers: [
                { text: "Verdadero", correct: true },
                { text: "Falso", correct: false }
            ]
        },
        {
            question: "¿Dónde se encuentra alojado el archivo sources.list?",
            answers: [
                { text: "/etc/network ", correct: false },
                { text: "/etc", correct: false },
                { text: "/etc/apt", correct: true },
                { text: "/", correct: false }
            ]
        },
        {
            question: "¿Con qué comando se puede buscar un paquete llamado 'ccze'?",
            answers: [
                { text: "apt-cache search ccze", correct: true},
                { text: "dpkg -l ccze", correct: false },
                { text: "apt-get install ccze", correct: false},
                { text: "apt-get remove ccze", correct: false }
            ]
        },
        {
            question: "Con el comando “apt-get install 'nombre del paquete 'se puede instalar un software adicional que necesitemos.",
            answers: [
                { text: "Verdadero", correct: true },
                { text: "Falso", correct: false }
            ]
        },
        {
            question: "Cuando se redirecciona la salida de un archivo a /dev/null, el stdOUT es la pantalla.",
            answers: [
                { text: "Verdadero", correct: false },
                { text: "Falso", correct: true }
            ]
        },
        {
            question: "Con el comando X se pueden actualizar los programas que ya están instalados,\n respetando los archivos de configuración existentes.",
            answers: [
                { text: "X = apt remove (nombre paquete)", correct: false },
                { text: "X = sudo apt update", correct: false }, //instala actualizaciones
                { text: "X = sudo apt upgrade ", correct: true }, 
                { text: "X = sudo apt purge (nombre del paquete)", correct: false }
            ]
        },
        {
            question: "¿Qué filtro se utiliza si se está buscando una palabra en concreto dentro de un archivo?",
            answers: [
                { text: "sort", correct: false }, // ordena líneas de texto
                { text: "Uniq", correct: false },
                { text: "find", correct: false },
                { text: "grep", correct: true}
            ]
        },
        {
            question: "¿Con qué comando se puede buscar un paquete llamado 'ccze'?",
            answers: [
                { text: "apt-cache search ccze ", correct: true }, 
                { text: "dpkg -l ccze", correct: false },
                { text: "apt-get install ccze", correct: false },
                { text: "apt-get remove ccze", correct: false}
            ]
        },
        {
            question: "Si se quiere agregar al contenido de un archivo llamado logs_actuales.log la salida del comando 'cat logs', ¿qué se debería utilizar?",
            answers: [
                { text: "| (pipe)", correct: false}, 
                { text: "-->", correct: false },
                { text: ">", correct: false },
                { text: ">>", correct: true}
            ]
        },
        {
            question: "¿Con qué comando se remueve un paquete instalado llamado 'squid'?",
            answers: [
                { text: "tar cvzf squid", correct: false}, 
                { text: "apt-get remove 'squid'", correct: true },
                { text: "apt-get update squid", correct: false },
                { text: "apt-get dist-upgrade squid", correct: false}
            ]
        }
    ],
    unidad4: [
        {
            question: "El comando “ip a” muestra la configuración actual de la placa de red.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "¿Qué archivo se edita para permitir el acceso SSH del usuario root en OpenSSH-Server?",
            answers: [
                { text: "/etc/network/interfaces", correct: false}, 
                { text: "/home/root/.ssh/config", correct: false },
                { text: "/etc/ssh/sshd_config", correct: true },
                { text: "/etc/ssh/ssh_config", correct: false} // por la d
            ]
        },
        {
            question: "¿Cuál es el comando para reiniciar el servicio SSH en Debian?",
            answers: [
                { text: "sudo service ssh reload", correct: false}, 
                { text: "sudo /etc/init.d/sshd restart", correct: false },
                { text: "sudo systemctl restart ssh", correct: true },
                { text: "sudo restart sshd", correct: false} 
            ]
        },
        {
            question: "Para habilitar el acceso SSH de root, basta con modificar\nla línea “PermitRootLogin” en el archivo sshd_config.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "¿En qué directorio se encuentra el archivo de configuración de las placas de red?",
            answers: [
                { text: "/etc/ssh/ssh_config", correct: false}, 
                { text: "/etc/ssh/sshd_config", correct: false },
                { text: "/etc/network/interfaces", correct: true },
                { text: "/home/root/.ssh/config", correct: false} 
            ]
        }
    ],
    unidad5: [
        {
            question: "El usuario Clark Kent lo creamos con el comando “useradd ckent -m”",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "Un usuario puede pertenecer a más de un grupo al mismo tiempo.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "Con el comando 'usermod -aG Supergrupo bwayne' agrega a 'bwayne' dentro del grupo 'Supergrupo'.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "¿Qué archivo guarda una línea por usuario con toda su información? ",
            answers: [
                { text: "/etc/sudoers", correct: false}, 
                { text: "/etc/group", correct: false },
                { text: "/root/.bashrc", correct: false },
                { text: "/etc/passwd", correct: true} 
            ]
        },
        {
            question: "¿Qué archivo se edita con “visudo” para configurar permisos de sudo?",
            answers: [
                { text: "/etc/passwd", correct: false}, 
                { text: "/etc/sudoers", correct: true },
                { text: "/etc/group", correct: false },
                { text: "/root/.bashrc", correct: false} 
            ]
        },
        {
            question: "¿Qué opción del comando useradd permite crear el directorio personal automáticamente?",
            answers: [
                { text: "-m", correct: true}, 
                { text: "-p", correct: false },
                { text: "-d", correct: false },
                { text: "-c", correct: false} 
            ]
        },
        {
            question: "El comando “groupdel” elimina un grupo, incluso si tiene usuarios asignados.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        },
        {
            question: "¿Qué línea debe agregarse al archivo “sudoers” para otorgar permisos de SUDO al grupo 'Supergrupo'?",
            answers: [
                { text: "%ALL=(Supergrupo) ALL", correct: false}, 
                { text: "Supergrupo ALL=(ALL) ALL", correct: false },
                { text: "%Supergrupo ALL=(ALL:ALL) ALL", correct: true },
                { text: "ALL Supergrupo=(ALL) ALL", correct: false} 
            ]
        },
        {
            question: "Agregando al usuario “bwayne” al grupo “Supergrupo”,\néste podrá usar sudo sin necesidad de editar el archivo sudoers.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "El comando useradd “Supergrupo” crea un grupo nuevo llamado Supergrupo.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        }
    
    ],
    unidad6: [
        {
            question: "El comando chown cambia el grupo al que pertenece un archivo.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        },
        {
            question: "El comando chmod 777 da permisos de lectura, escritura y ejecución a todos los usuarios.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "Si se quiere aplicar, de forma recursiva, el permiso 700 a un directorio llamado 'carpeta1' y sus archivos dentro,\nel comando completo que se debería utilizar es X (expresarlo en formato octal).",
            answers: [
                { text: "X = chmod -R 700 carpeta1", correct: true}, 
                { text: "X = chmod -e 700 carpeta1", correct: false },
                { text: "X = chmod -R 400 carpeta1", correct: false },
                { text: "X = chmod -R 100 carpeta1", correct: false} 
            ]
        },
        {
            question: "El bit SetGUID, aplicado a un directorio,\nhace que los archivos creados en su interior hereden el grupo del directorio.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "Se le quiere poner a un archivo los permisos -rwx r-x r- -. El comando que se debería ejecutar es “X” (expresarlo en formato octal).",
            answers: [
                { text: "X = chmod 457", correct: false}, 
                { text: "X = chmod 744", correct: false },
                { text: "X = chmod 754", correct: true },
                { text: "X = chmod 777", correct: false} 
            ]
        },
        {
            question: "Si un archivo tiene los permisos -rw-r--r--, ¿qué puede hacer el propietario?",
            answers: [
                { text: "Sólo escribir", correct: false}, 
                { text: "Leer y escribir", correct: true },
                { text: "Leer, escribir y ejecutar", correct: false },
                { text: "Sólo leer", correct: false} 
            ]
        },
        {
            question: "¿Qué comando se utiliza para cambiar los permisos de un archivo o carpeta?",
            answers: [
                { text: "chgrp", correct: false}, 
                { text: "chmod", correct: true },
                { text: "chown", correct: false },
                { text: "chperm", correct: false} 
            ]
        },
        {
            question: "¿Qué significado tiene el número '7' en los permisos de un archivo?",
            answers: [
                { text: "Solo lectura", correct: false}, 
                { text: "Ningún permiso ", correct: false },
                { text: "Escritura y ejecución", correct: false },
                { text: "cLectura, escritura y ejecución", correct: true} 
            ]
        },
        {
            question: "El StickyBit permite que cualquier usuario elimine archivos dentro de un directorio.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        },
        {
            question: "Se le quiere poner a un archivo los permisos -rw-rw-r--. El comando que se debería ejecutar es “chmod u+rw,g+rw,o+r”.\n(expresarlo en formato simbólico).",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "Los permisos de un directorio afectan operaciones que se pueden realizar dentro de él.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        }
        
    ],
    unidad7: [
        {
            question: "¿Cuál es el formato más común para particiones Linux?",
            answers: [
                { text: "FAT32", correct: false}, 
                { text: "NTFS", correct: false },
                { text: "exFAT", correct: false },
                { text: "ext4", correct: true} 
            ]
        },
        {
            question: "El comando fdisk se usa para crear y modificar particiones en discos.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "El comando mkfs -t ext4 se usa para verificar errores en el sistema de archivos ext4.",
            answers: [
                { text: "Verdadero", correct: false},
                { text: "Falso", correct: true}
            ]
        },
        {
            question: "¿Qué comando se utiliza para ver los discos disponibles en el sistema?  ",
            answers: [
                { text: "df", correct: false}, 
                { text: "blkid", correct: false },
                { text: "lsblk", correct: true },
                { text: "lsdisk", correct: false} 
            ]
        },
        {
            question: "El comando mount con la opción -a lee la configuración del fstab para volver a montar las unidades.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "El archivo /etc/fstab se lee cada vez que el sistema reinicia para montar discos automáticamente.",
            answers: [
                { text: "Verdadero", correct: true},
                { text: "Falso", correct: false}
            ]
        },
        {
            question: "El comando X formatea el disco con el sistema de archivos ext4.",
            answers: [
                { text: "X = mkfs -t ext4", correct: true}, 
                { text: "X = mkfs", correct: false },
                { text: "X = ext4", correct: false },
                { text: "X = f", correct: false} 
            ]
        },
        {
            question: "Con el comando X se desmontan las particiones cuando ya no se necesitan. ",
            answers: [
                { text: "X = mount", correct: false}, 
                { text: "X = unmount", correct: true },
                { text: "X = chmod", correct: false },
                { text: "X = ext4", correct: false} 
            ]
        },
        {
            question: "Para copiar archivos preservando permisos y atributos, se usa el comando X (sólo comando y opción).",
            answers: [
                { text: "X = cp -r", correct: false}, 
                { text: "X = cp -f", correct: false },
                { text: "X = cp -a", correct: true },
                { text: "X = cp -d", correct: false} 
            ]
        },
        {
            question: "¿Qué archivo se utiliza para definir montajes persistentes en el sistema?",
            answers: [
                { text: "/etc/disk.cfg", correct: false}, 
                { text: "/etc/mount.conf", correct: false },
                { text: "/etc/mount", correct: false },
                { text: "/etc/fstab", correct: true} 
            ]
        }
    ]
};

let preguntas = [];
let indiceActual = 0;

document.getElementById('unidad').addEventListener('change', function() {
    const unidadSeleccionada = this.value;
    if (data[unidadSeleccionada]) {
        preguntas = data[unidadSeleccionada];
        indiceActual = 0;
        mostrarPregunta();
    } else {
        document.getElementById('preguntas').innerHTML = '';
    }
});

function mostrarPregunta() {
    const contenedor = document.getElementById('preguntas');
    contenedor.innerHTML = '';
    const contador = document.getElementById('contador');
    contador.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;

    if (indiceActual >= preguntas.length) {
        contador.textContent = `Pregunta ${indiceActual} de ${preguntas.length}`;
        contenedor.innerHTML = "<h2>¡Terminaste la unidad! 🎉</h2>";
        return;
    }

    const q = preguntas[indiceActual];

    const preguntaDiv = document.createElement('div');
    preguntaDiv.className = 'question';

    const preguntaTitulo = document.createElement('h3');
    preguntaTitulo.textContent = q.question;
    preguntaDiv.appendChild(preguntaTitulo);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    q.answers.forEach((answer) => {
        const option = document.createElement('div');
        option.className = 'option';
        option.textContent = answer.text;
        option.addEventListener('click', () => {
            if (answer.correct) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
            setTimeout(() => {
                indiceActual++;
                mostrarPregunta();
            }, 800); // espera 0.8 segundos para pasar a la siguiente
        });
        optionsDiv.appendChild(option);
    });

    preguntaDiv.appendChild(optionsDiv);
    contenedor.appendChild(preguntaDiv);
}
