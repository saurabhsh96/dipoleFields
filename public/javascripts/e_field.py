import sys
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle
from mpl_toolkits.mplot3d import axes3d
from mayavi import mlab

def E(q, r0, x, y, z):
    print(q, r0)
    """Return the electric field vector E=(Ex,Ey, Ez) due to charge q at r0."""
    den = np.hypot(x-r0[0], y-r0[1], z-r0[2])**3 #Euclidean distance between two 3d vectors
    #Added a third component, assuming r0 is a 3d vector
    return q * (x - r0[0]) / (den * 2 * np.pi), q * (y - r0[1]) / (den * 2 * np.pi),  q * (z - r0[2]) / (den * 2 * np.pi)

# Grid of x, y points
nx, ny, nz = 10, 10, 10
x = np.linspace(-4, 4, nx)
y = np.linspace(-4, 4, ny)
z = np.linspace(-4, 4, nz)
X, Y, Z = np.meshgrid(x, y, z)
#X = X.transpose()
#Y = Y.transpose()
#Y = Z.transpose()


# Create a multipole with nq charges of alternating sign, equally spaced
# on the unit circle.
nq = 2**int(1)
charges = []
for i in range(nq):
    q = i%2 * 2 - 1
    q = q * 100
    charges.append((q, (2*np.cos(2*np.pi*i/nq), 2*np.sin(2*np.pi*i/nq), 0)))

#print(charges)
# Electric field vector, E=(Ex, Ey), as separate components

Ex, Ey, Ez = np.zeros((nz, nx, ny)), np.zeros((ny, nx, nz)), np.zeros((ny, nx, nz))
print(Ex.size, Ey.size, Ez.size)
for charge in charges:
    ex, ey, ez = E(*charge, x=X, y=Y, z=Z)
    #print(ex)
    Ex += ex
    Ey += ey
    Ez += ez
    
"""fig = plt.figure()
#ax = fig.add_subplot(111, projection='3d')
ax = fig.gca(projection='3d')

#Plot the streamlines with an appropriate colormap and arrow style
color = 2 * np.log(np.hypot(Ex, Ey, Ez))
#ax.streamplot(x, y, z, Ex, Ey, Ez, linewidth=1, cmap=plt.cm.inferno,
#              density=2, arrowstyle='->', arrowsize=1.5)

ax.quiver(X, Y, Z, Ex, Ey, Ez, length=0.1)    
#Add filled circles for the charges themselves
charge_colors = {True: '#aa0000', False: '#0000aa'}
for q, pos in charges:
    ax.add_artist(Circle(pos, 0.05, color=charge_colors[q>0]))

ax.set_xlabel('$x$')
ax.set_ylabel('$y$')
ax.set_zlabel('$z$')

ax.set_xlim(-10,10)
ax.set_ylim(-10,10)
ax.set_zlim(-10,10)
ax.set_aspect('equal')
plt.show()"""

Ex.shape = X.shape
Ey.shape = Y.shape
Ez.shape = Z.shape
Enorm = np.sqrt(Ex**2 + Ey**2 + Ez**2)

Ex = Ex/(Enorm*1)
Ey = Ey/(Enorm*1)
Ez = Ez/(Enorm*1)

#Emax = 100

#Ex[Enorm > Emax] = 0
#Ey[Enorm > Emax] = 0
#Ez[Enorm > Emax] = 0
#Enorm[Enorm > Emax] = Emax

figure1 = mlab.figure(1, bgcolor=(1, 1, 1), fgcolor=(0.5, 0.1, 0.8),
               size=(1024, 1024))

#mlab.axes(figure1, color=(.7, .7, .7), extent=X,
#            ranges=(-5, 5, -5, 5, -5, 5), xlabel='X', ylabel='Y',
#            zlabel='Z')
#,
#            x_axis_visibility=False, z_axis_visibility=False)

#mlab.axes(xlabel="X", ylabel="Y", zlabel="Z")
mlab.clf()



#field = mlab.pipeline.vector_field(X, Y, Z, Ex, Ey, Ez)#, scalars=Enorm, name='E field')
#vectors = mlab.pipeline.vectors(field,
#                      scale_factor=(X[1, 0, 0] - X[0, 0, 0]),
#                      )

#mlab.pipeline.vectors(field, mask_points = 100, scale_factor=3.)

#vectors.glyph.mask_input_points = True
#vectors.glyph.mask_points.on_ratio = 6

#vcp = mlab.pipeline.vector_cut_plane(field)
#vcp.glyph.glyph.scale_factor=5*(X[1, 0, 0] - X[0, 0, 0])
# For prettier picture:
#vcp.implicit_plane.widget.enabled = False

#iso = mlab.pipeline.iso_surface(field,
#                                contours=[0.1*Emax, 0.4*Emax],
#                                opacity=0.6,
#                                colormap='YlOrRd')

# A trick to make transparency look better: cull the front face
#iso.actor.property.frontface_culling = True

#mlab.show()

#mlab.view(39, 74, 0.59, [.008, .0007, -.005])
#mlab.figure(1, bgcolor=(1, 1, 1), fgcolor=(0.5, 0.5, 0.5),
#               size=(480, 480))
#mesh = mlab.mesh(X, Y, Z, colormap="bone")
obj = mlab.quiver3d(X, Y, Z, Ex, Ey, Ez, line_width=0.05, scale_factor=1)
mlab.show()