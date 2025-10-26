import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M22.5 20.5H1.5L3.5 16.5H20.5L22.5 20.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M20.5 16.5V5C20.5 4.17157 19.8284 3.5 19 3.5H5C4.17157 3.5 3.5 4.17157 3.5 5V16.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 12L12 13.5M12 12C12.737 12 13.3809 11.6013 13.7278 11.0079M12 12C11.263 12 10.6191 11.6013 10.2722 11.0079M12 8L12 6.5M12 8C12.737 8 13.3809 8.39866 13.7278 8.99209M12 8C11.263 8 10.6191 8.39865 10.2722 8.99209M15 8.25L13.7278 8.99209M9 11.75L10.2722 11.0079M15 11.75L13.7278 11.0079M9 8.25L10.2722 8.99209M13.7278 11.0079C13.9009 10.7119 14 10.3676 14 10C14 9.63244 13.9009 9.28805 13.7278 8.99209M10.2722 8.99209C10.0992 9.28804 10 9.63244 10 10C10 10.3676 10.0991 10.712 10.2722 11.0079', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LaptopSettings',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
